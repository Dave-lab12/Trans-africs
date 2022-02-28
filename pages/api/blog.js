import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { authorId, title, image, content, authorImg, author } = req.body
        try {

            const article = await prisma.article.create({
                data: {

                    authorId: authorId, title, image, content, createdAt: new Date(), image, authorImg, author
                }
            })
            // .catch(e=>console.log(e))
            res.status(200).json(article)
        } catch (err) {
            res.status(400).json(err)
        }
    } else if (req.method === 'GET') {

        if (req.query.id) {
            try {
                const singleBlog = await prisma.article.findFirst({
                    where: {
                        id: req.query.id
                    }
                })
                res.status(200).json(singleBlog)
            } catch (e) {
                res.status(400).json(e)
            }
        } else {

            try {

                const blogs = await prisma.article.findMany()
                res.status(200).json(blogs)
            } catch (error) {
                res.status(400).json(error)

            }
        }

    }
    return null
}
