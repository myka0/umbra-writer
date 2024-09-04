import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  const session = await getServerSession(event)
  const body = await readBody(event)

  // Create a new document
  try {
    const newDocument = await event.context.prisma.document.create({
      data: {
        title: body.title,
        content: body.content,
        userId: session.user.id,
      },
    })
   return {
      success: true,
      document: newDocument,
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
})

