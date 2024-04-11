import {
  IconH1,
  IconH2,
  IconH3,
  IconH4
  // IconHeading
} from '@codexteam/icons'
// import EditorJs from '@editorjs/editorjs'

import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
// import Header from 'editorjs-plugin-header'
import List from '@editorjs/list'
import NestedList from '@editorjs/nested-list'
import Button from 'editorjs-button'
import Image from '@editorjs/image'
import Warning from '@editorjs/warning'
import Raw from '@editorjs/raw'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import Code from '@editorjs/code'
// import Table from 'editorjs-table'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist'
import Alert from 'editorjs-alert'
import ToggleBlock from 'editorjs-toggle-block'
// import editorjsColumns from '@calumk/editorjs-columns'

// inline block
import ColorPlugin from 'editorjs-text-color-plugin'
// import Marker from '@editorjs/marker'
import Embed from '@editorjs/embed'
import Link from '@editorjs/link-autocomplete'
import InlineCode from '@editorjs/inline-code'

import AlignBlock from 'editorjs-text-alignment-blocktune'
import Underline from '@editorjs/underline'
import Strikethrough from '@sotaproject/strikethrough'
import ChangeCase from 'editorjs-change-case'
import Tooltip from 'editorjs-tooltip'
// import Annotation from 'editorjs-plugin-annotation'
import { StyleInlineTool } from 'editorjs-style'
import Hyperlink from 'editorjs-hyperlink'

import { deepMerge, isObject } from './tool'

export const getEditorPlugins = (customPlugin) => ({
  // Block
  h1: {
    class: Header,
    tunes: ['alignBlockTune'],
    inlineToolbar: ['link'],
    config: {
      defaultLevel: 1, // 默认标题
      levels: [1, 2, 3, 4]
    },
    toolbox: {
      icon: IconH1,
      title: 'Heading 1'
    }
  },
  h2: {
    class: Header,
    tunes: ['alignBlockTune'],
    inlineToolbar: true,
    config: {
      defaultLevel: 2,
      levels: [1, 2, 3, 4]
    },
    toolbox: {
      icon: IconH2,
      title: 'Heading 2'
    }
  },
  h3: {
    class: Header,
    tunes: ['alignBlockTune'],
    inlineToolbar: true,
    config: {
      defaultLevel: 3,
      levels: [1, 2, 3, 4]
    },
    toolbox: {
      icon: IconH3,
      title: 'Heading 3'
    }
  },
  h4: {
    class: Header,
    tunes: ['alignBlockTune'],
    inlineToolbar: true,
    config: {
      defaultLevel: 4,
      levels: [1, 2, 3, 4]
    },
    toolbox: {
      icon: IconH4,
      title: 'Heading 4'
    }
  },
  paragraph: {
    class: Paragraph,
    config: {
      tunes: ['alignBlockTune'],
      inlineToolbar: true,
      config: {
        placeholder: 'Press Tab',
        preserveBlank: true // 是否保留空白行
      }
    }
  },
  list: {
    class: List,
    config: {
      tunes: ['alignBlockTune'],
      inlineToolbar: true
    },
    toolbox: {
      title: 'List'
    }
  },
  nestedList: {
    class: NestedList,
    config: {
      tunes: ['alignBlockTune'],
      inlineToolbar: true
    },
    toolbox: {
      title: 'NestedList'
    }
  },
  button: {
    class: Button,
    config: {
      tunes: ['alignBlockTune']
    }
  },
  warning: {
    class: Warning
  },
  raw: {
    class: Raw
  },
  quote: {
    class: Quote
  },
  delimiter: {
    class: Delimiter
  },
  code: {
    class: Code
  },
  table: {
    class: Table
  },
  checklist: {
    class: Checklist
  },
  nestedchecklist: {
    class: editorjsNestedChecklist
  },
  alert: {
    class: Alert,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+A',
    config: {
      defaultType: 'primary',
      messagePlaceholder: 'Enter something'
    }
  },
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true
  },
  // columns: {
  //   class: editorjsColumns,
  //   config: {
  //     EditorJsLibrary: EditorJs, // Pass the library instance to the columns instance.
  //     tools: {

  //     } // IMPORTANT! ref the column_tools
  //   }
  // },
  image: {
    class: Image,
    tunes: ['alignBlockTune'],
    config: {
      uploader: {
        uploadByFile(file) {
          // return Promise.resolve({
          //   success: true,
          //   file: {
          //     url: file
          //   }
          // })
          return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.readAsDataURL(file)
            reader.onload = (e) => {
              resolve({
                success: true,
                file: {
                  url: e.target.result
                }
              })
            }
          })
        }
      }
    }
  },

  // 功能
  Color: {
    class: ColorPlugin,
    config: {
      colorCollections: ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
      defaultColor: '#FF1300',
      type: 'text',
      customPicker: true // add a button to allow selecting any colour
    }
  },
  Marker: {
    class: ColorPlugin,
    config: {
      defaultColor: '#FFBF00',
      type: 'marker',
      icon: '<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>'
    }
  },
  embed: {
    class: Embed
  },
  inlineCode: {
    class: InlineCode
  },
  link: {
    class: Link,
    config: {
      endpoint: 'http://localhost:3000/',
      queryParam: 'search'
    }
  },
  alignBlockTune: {
    class: AlignBlock,
    config: {
      default: 'left',
      blocks: {
        button: 'center'
      }
    }
  },
  underline: {
    class: Underline,
    config: {
      shortcut: 'CMD+U'
    }
  },
  strikethrough: {
    class: Strikethrough,
    config: {
      shortcut: 'CMD+Alt+S'
    }
  },
  changeCase: {
    class: ChangeCase,
    config: {
      showLocaleOption: true, // enable locale case options
      locale: 'tr' // or ['tr', 'TR', 'tr-TR']
    }
  },
  tooltip: {
    class: Tooltip,
    config: {
      location: 'left',
      highlightColor: '#FFEFD5',
      underline: true,
      backgroundColor: '#154360',
      textColor: '#FDFEFE',
      holder: 'vue-editor-js'
    }
  },
  // annotation: {
  //   class: Annotation
  // },
  editorStyle: {
    class: StyleInlineTool
  },
  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: 'CMD+L',
      target: '_blank',
      rel: 'nofollow',
      availableTargets: ['_blank', '_self'],
      availableRels: ['author', 'noreferrer'],
      validate: false
    }
  },

  ...customPlugin
})

export function getEditorTools(props) {
  const {
    disablePlugin, // disabled plugin
    blockToolbar, // open and sort plugin
    customPlugin, // add custom plugin
    pluginConfig // plugin config
  } = props

  const allPlugins = getEditorPlugins(isObject(customPlugin) ? customPlugin : {})

  const blockPlugin = {}
  const inlinePlugin = {}
  const sortBlockPlugin = {}

  Object.entries(allPlugins).forEach((plugin) => {
    const pluginKey = plugin[0]
    const pluginValue = plugin[1]

    if (disablePlugin.includes(pluginKey)) return

    // deep merge plugin config
    if (pluginConfig?.[pluginKey]) {
      deepMerge(pluginValue.config, pluginConfig[pluginKey])
    }

    // block plugin, is not isTune and isInline
    if (!pluginValue.class.isTune && !pluginValue.class.isInline) {
      // filter block
      if (blockToolbar?.length) {
        if (blockToolbar.includes(pluginKey)) {
          blockPlugin[pluginKey] = pluginValue
        }
      } else {
        blockPlugin[pluginKey] = pluginValue
      }
    } else {
      inlinePlugin[pluginKey] = pluginValue
    }
  })

  if (blockToolbar?.length) {
    blockToolbar.forEach((key) => {
      if (blockPlugin[key]) {
        sortBlockPlugin[key] = blockPlugin[key]
      }
    })
    return { ...sortBlockPlugin, ...inlinePlugin }
  }

  return { ...blockPlugin, ...inlinePlugin }
}
