"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "./ContactForm";

export function CtaBox() {
  const t = useTranslations("whyChoose.cta");
  const tForm = useTranslations("contact.form");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-12 px-6 rounded-2xl bg-gradient-to-r from-primary to-accent"
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {t("subtitle")}
        </h3>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          {t("message")}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="!border-white !text-white hover:!bg-white/10"
          onClick={() => setIsModalOpen(true)}
        >
          {t("button")}
        </Button>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={tForm("title")}
      >
        <ContactForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
