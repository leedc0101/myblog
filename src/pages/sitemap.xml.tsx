import { getPosts } from "../apis/notion-client/getPosts"
import { CONFIG } from "site.config"
import { getServerSideSitemap, ISitemapField } from "next-sitemap"
import { GetServerSideProps } from "next"
import {
  filterPosts,
  FilterPostsOptions,
} from "src/libs/utils/notion/filterPosts"

const filter: FilterPostsOptions = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Paper", "Post", "Page"],
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getPosts()

  const filteredPost = filterPosts(posts)

  // Create an array of fields, each with a loc and lastmod
  const fields: ISitemapField[] = filteredPost.map((post) => ({
    loc: `${CONFIG.link}/${post.slug}`,
    lastmod: post.updatedAt,
    priority: 0.7,
    changefreq: "daily",
  }))

  // Include the site root separately
  fields.unshift({
    loc: CONFIG.link,
    lastmod: new Date().toISOString(),
    priority: 1.0,
    changefreq: "daily",
  })

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}
