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

</script>

<template>
  <Toolbar :editor="editor" />
  <editor-content :editor="editor" />
</template>
