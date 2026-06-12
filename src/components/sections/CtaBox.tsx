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
        className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-white/5"
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {t("subtitle")}
        </h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          {t("message")}
        </p>
        <Button
          variant="gradient"
          size="lg"
          className="glow-border"
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
