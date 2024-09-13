<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import Underline from '@tiptap/extension-underline'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Typography from '@tiptap/extension-typography'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import FontSize from 'tiptap-extension-font-size'

import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeBracesIcon,
  ParagraphIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  H4Icon,
  H5Icon,
  H6Icon,
  ListIcon,
  OrderedListIcon,
  BlockquoteIcon,
  CodeIcon,
  HorizontalRuleIcon,
  PageBreakIcon,
  UndoIcon,
  RedoIcon,
  ClearFormatIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  MinusIcon,
  PlusIcon,
} from '@/components/icons'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

// Editor setup
const editor = useEditor({
  editorProps: {
    attributes: {
      class:
        'prose mx-auto outline-none overflow-auto p-24 min-h-[1120px] max-w-[800px] bg-neutral-100 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-500',
    },
  },
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
  autofocus: true,
  onCreate: ({ editor }) => {
    editor.chain().focus().setFontFamily('Times New Roman, serif').run()
    editor.chain().focus().setFontSize('12pt').run()
  },
  extensions: [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    TextStyle,
    FontFamily,
    StarterKit,
    Underline,
    Superscript,
    Subscript,
    Typography,
    FontSize,
    Image,
  ],
})

const commonFontSizes = ref([
  '8pt',
  '10pt',
  '11pt',
  '12pt',
  '14pt',
  '16pt',
  '18pt',
  '20pt',
  '24pt',
  '30pt',
  '36pt',
  '48pt',
  '60pt',
])
</script>

<template>
  <div class="mx-auto my-4 flex justify-center">
    <section
      v-if="editor"
      class="buttons inline-flex items-center gap-x-2 rounded p-2 border border-neutral-400 bg-neutral-100 text-neutral-900 dark:border-neutral-500 dark:bg-neutral-800 dark:text-neutral-50"
    >
      <!-- Undo / Redo -->
      <ToolbarButton
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <UndoIcon title="Undo (Ctrl + Z)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <RedoIcon title="Redo (Ctrl + Shift + Z)" />
      </ToolbarButton>
      <div class="separator"></div>

      <!-- Text Alignment -->
      <ToolbarDropdown>
        <ToolbarButton
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
          <AlignLeft title="Left Align (Ctrl + Shift + L)" />
        </ToolbarButton>
        <template v-slot:content>
          <ToolbarButton
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          >
            <AlignCenter title="Center Align (Ctrl + Shift + E)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          >
            <AlignRight title="Right Align (Ctrl + Shift + R)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().setTextAlign('justify').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
          >
            <AlignJustify title="Justify (Ctrl + Shift + J)" />
          </ToolbarButton>
        </template>
      </ToolbarDropdown>

      <!-- Text Styles -->
      <ToolbarDropdown>
        <ToolbarButton
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
        >
          <ParagraphIcon title="paragraph (Ctrl + Alt + 0)" />
        </ToolbarButton>
        <template v-slot:content>
          <ToolbarButton
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          >
            <H1Icon title="H1 (Ctrl + Alt + 1)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          >
            <H2Icon title="H2 (Ctrl + Alt + 2)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          >
            <H3Icon title="H3 (Ctrl + Alt + 3)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          >
            <H4Icon title="H4 (Ctrl + Alt + 4)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          >
            <H5Icon title="H5 (Ctrl + Alt + 5)" />
          </ToolbarButton>
          <ToolbarButton
            @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          >
            <H6Icon title="H6 (Ctrl + Alt + 6)" />
          </ToolbarButton>
        </template>
      </ToolbarDropdown>
      <div class="separator"></div>

      <!-- Font Properties -->
      <select
        v-model="editor.getAttributes('textStyle').fontFamily"
        @change="
          editor.chain().focus().setFontFamily($event.target.value).run()
        "
        class="px-1 py-0.5 bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-800 rounded dark:hover:bg-neutral-700"
      >
        <option value="Times New Roman, serif">Times New Roman</option>
        <option value="Inter">Inter</option>
        <option value="Comic Sans MS, Comic Sans">Comic Sans</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
      </select>
      <div class="separator"></div>

      <!-- Font Size Controls -->
      <button
        class=""
        @click="
          editor
            .chain()
            .focus()
            .setFontSize(
              `${parseInt(editor.getAttributes('textStyle').fontSize) - 1}pt`
            )
            .run()
        "
      >
        <MinusIcon :size="16" />
      </button>
      <select
        v-model="editor.getAttributes('textStyle').fontSize"
        @change="editor.chain().focus().setFontSize($event.target.value).run()"
        class="px-1 py-0.5 bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-800 rounded dark:hover:bg-neutral-700"
      >
        <option v-for="size in commonFontSizes" :key="size" :value="size">
          {{ size }}
        </option>
      </select>
      <button
        @click="
          editor
            .chain()
            .focus()
            .setFontSize(
              `${parseInt(editor.getAttributes('textStyle').fontSize) + 1}pt`
            )
            .run()
        "
      >
        <PlusIcon :size="16" />
      </button>
      <div class="separator"></div>

      <!-- Basic Text Formating -->
      <ToolbarButton
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <BoldIcon title="Bold (Ctrl + B)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <ItalicIcon title="Italic (Ctrl + I)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().toggleUnderline().run()"
        :disabled="!editor.can().chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
      >
        <UnderlineIcon title="Underline (Ctrl + U)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <StrikethroughIcon title="Strikethrough (Ctrl + Shift + S)" />
      </ToolbarButton>
      <div class="separator"></div>

      <!-- Lists -->
      <ToolbarButton
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <ListIcon title="Bullet List (Ctrl + Shift + 8)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <OrderedListIcon title="Odered List (Ctrl + Shift + 7)" />
      </ToolbarButton>
      <div class="separator"></div>

      <!-- Code / Quote Formating -->
      <ToolbarButton
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        <CodeIcon title="Code (Ctrl + E)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        <CodeBracesIcon title="Code Block (Ctrl + Alt + C)" />
      </ToolbarButton>
      <ToolbarButton
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <BlockquoteIcon title="Block Quote (Ctrl + Shift + B)" />
      </ToolbarButton>
      <div class="separator"></div>

      <!-- Line Breaks -->
      <ToolbarButton @click="editor.chain().focus().setHorizontalRule().run()">
        <HorizontalRuleIcon title="Line Break" />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().setHardBreak().run()">
        <PageBreakIcon title="Page Break (Ctrl + Enter)" />
      </ToolbarButton>
      <div class="separator"></div>

      <!-- Clear Formating -->
      <ToolbarButton @click="editor.chain().focus().unsetAllMarks().run()">
        <ClearFormatIcon title="Clear Formating" />
      </ToolbarButton>
    </section>
  </div>
  <editor-content :editor="editor" />
</template>

<style scoped>
code::before,
code::after {
  display: none;
}

.separator {
  border-right: 1px solid theme('colors.neutral.500');
  height: 1.5rem;
  margin: 0 0.25rem;
}
</style>
