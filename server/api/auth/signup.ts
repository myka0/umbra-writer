import bcrypt from 'bcrypt'
import { readBody } from 'h3'

export default eventHandler(async (event) => {
  const { email, name, password } = await readBody(event)

  // Hash the password before saving to the database
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await event.context.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    await event.context.prisma.account.create({
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
