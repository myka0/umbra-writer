import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

const exampleContent = `
<p><span style="font-family: Times New Roman, serif; font-size: 16pt"><strong>Hi there,</strong></span></p>
<p><span style="font-family: Times New Roman, serif; font-size: 12pt">this is a <em>basic</em> example of Umbra. Sure, there are all kinds of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</span></p>
<ul>
  <li><p><span style="font-family: Times New Roman, serif; font-size: 12pt">That’s a bullet list with one …</span></p></li>
  <li><p><span style="font-family: Times New Roman, serif; font-size: 12pt">… or two list items.</span></p></li>
</ul>
<p><span style="font-family: Times New Roman, serif; font-size: 12pt">Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:</span></p>
<pre><code class="language-css">body {
  display: none; 
}</code></pre>
<p><span style="font-family: Times New Roman, serif; font-size: 12pt">I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around.</span></p>
<blockquote><p><span style="font-family: Times New Roman, serif; font-size: 12pt">People say nothing is impossible, but I do nothing every day. <br>— A. A. Milne</span></p></blockquote>
<p></p>
`

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ userId: string }>(event)
    const userId = body.userId

    if (!userId) {
      throw new Error('User ID is required')
    }

    // Create the example document for the user
    const newDocument = await prisma.document.create({
      data: {
        title: 'Example Document',
        content: exampleContent,
        userId: userId,
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
