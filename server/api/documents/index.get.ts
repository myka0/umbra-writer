import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
const session = await getServerSession(event)
  // Fetch all documents for the current user
  try {
    const documents = await event.context.prisma.document.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
      include: {
        directory: true,
      },
    })
     return {
       success: true,
       documents
     }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
})

