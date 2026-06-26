"use client";

import { useCallback, useState } from "react";
import type {
  ContactFormData,
  ContactFormErrors,
  ContactFormStatus,
} from "../types";
import { isFormValid, validateContactForm } from "../validation";

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const updateField = useCallback(
    <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error for the field being edited
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (!isFormValid(validationErrors)) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData(initialData);
    } catch {
      setStatus("error");
    }
  }, [formData]);

  const resetStatus = useCallback(() => {
    setStatus("idle");
  }, []);

  return {
    formData,
    errors,
    status,
    updateField,
    handleSubmit,
    resetStatus,
  };
}
