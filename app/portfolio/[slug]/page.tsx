import ProjectDetailPage, { generateStaticParams as origGenerateParams, generateMetadata as origGenerateMetadata } from "@/app/work/[slug]/page";

export const generateStaticParams = origGenerateParams;
export const generateMetadata = origGenerateMetadata;

export default ProjectDetailPage;
