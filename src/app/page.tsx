import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { EducationPreview } from "@/components/sections/education-preview";
import { CertificatesPreview } from "@/components/sections/certificates-preview";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <FeaturedProjects />
      <EducationPreview />
      <CertificatesPreview />
      <ContactCta />
    </>
  );
}
