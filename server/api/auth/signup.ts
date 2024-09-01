import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { email, username, password } = await readBody(event)

  // Hash the password before saving to the database
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    await prisma.account.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        provider: 'credentials',
        providerAccountId: user.id,
      },
    })

    return {
      success: true,
      user,
    }
  } catch (error: any) {
    return {
      success: false,
      message: 'Error creating user: ' + error.message,
    }
  }
})

