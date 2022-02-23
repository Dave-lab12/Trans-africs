import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password, firstname, lastname } = req.body.userData

        try {
            console.log(username, email, password, firstname, lastname);
            const user = await prisma.User.create({
                data: {
                    username: username, password: password, firstname: firstname, email: email, lastname: lastname
                }
            })
            console.log(user);
            res.status(200).json(user)
        } catch (error) {
            console.log('error');
            res.status(400).json(error)
        }
    } else if (req.method === 'GET') {
        const users = await prisma.User.findMany()
        res.json(users)
        // Handle any other HTTP method
    }
}
