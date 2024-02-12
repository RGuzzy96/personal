import BlogComponent from "@/components/blog";

const meta = {
    title: 'Blog | Ryan Guzzwell',
    description: "I'm Ryan Guzzwell and this is my personal website.",
    cardImage: '/r.png',
    robots: 'follow, index',
    favicon: '/r.png',
    url: 'https://ryanguzzwell.com/blog',
    type: 'website'
  };
  
  export const metadata = {
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    robots: meta.robots,
    favicon: meta.favicon,
    url: meta.url,
    type: meta.type,
    /*openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      cardImage: meta.cardImage,
      type: meta.type,
      site_name: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@autoleadai',
      title: meta.title,
      description: meta.description,
      cardImage: meta.cardImage
    }*/
  };

export default function BlogPage() {
    return (
        <BlogComponent />
    )
}