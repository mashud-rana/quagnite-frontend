import PublicCertificate from "./PublicCertificate";
import {fetchCertificate} from "@/utils/helper";

export async function generateMetadata({ params }) {
  const { uuid } = await params; // 👈 await here
  
  try {
   

    const resData = await fetchCertificate(uuid);
    if(!resData){
      return {
        title: "Certificate not found",
        description: "This certificate does not exist or has expired.",
      };
    }
    // console.log("Certificate Metadata Data:", data);

    let student = resData?.data?.certifiable?.data?.student;
    let exam = resData?.data?.certifiable?.data?.exam;
    const certificateTitle = `Certificate of ${student?.full_name || "User"}`;
    const certificateDescription = `Awarded for completing ${exam?.title || "a course"}.`;
    const certificateImage = exam?.image_url || "/default-certificate.jpg";

    return {
      title: certificateTitle,
      description: certificateDescription,
      openGraph: {
        title: certificateTitle,
        description: certificateDescription,
        images: [
          {
            url: certificateImage,
            width: 1200,
            height: 630,
            alt: "Certificate Preview",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: certificateTitle,
        description: certificateDescription,
        images: [certificateImage],
      },
      other: {
        // LinkedIn Open Graph tags
        "og:title": certificateTitle,
        "og:description": certificateDescription,
        "og:image": certificateImage,
        "og:type": "article",
      },
    };
  } catch (error) {
    return {
      title: "Certificate not found",
      description: "An error occurred while fetching the certificate metadata.",
    };
  }
}


export default async function CertificatePage({ params }) {
  // ✅ Get uuid from params
  const { uuid } = await params; // 👈 await here

  const resData = await fetchCertificate(uuid);
 
  // ✅ Pass to client component
  return <PublicCertificate uuid={uuid} resData={resData} />;
}
