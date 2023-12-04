import { defineAsyncComponent } from 'vue'
import {
  NAutoComplete,
  NCascader,
  NCheckbox,
  NCheckboxGroup,
  NColorPicker,
  NDatePicker,
  NDynamicInput,
  NDynamicTags,
  NInput,
  NInputNumber,
  NMention,
  NRadio,
  NRadioGroup,
  NRate,
  NSelect,
  NSlider,
  NSpace,
  NSwitch,
  NTimePicker,
  NTransfer,
  NTreeSelect
} from 'naive-ui'

import type { Recordable, FormSchema } from '../types'
export const componentMapInfo = {
  'auto-complete': {
    outputStr: '输入',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NAutoComplete
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NAutoComplete>
      )
    }
  },
  cascader: {
    outputStr: '选择',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NCascader
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NCascader>
      )
    }
  },
  'color-picker': {
    outputStr: '选择',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NColorPicker
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NColorPicker>
      )
    }
  },

  'checkbox-single': {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NCheckbox
          v-model:checked={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NCheckbox>
      )
    }
  },
  checkbox: {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      if (!schema?.componentProps?.options) {
        return null
      }
      return (
        <NCheckboxGroup
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        >
          <NSpace>
            {schema.componentProps.options?.map((item: Recordable) => {
              return <NCheckbox value={item.value} label={item.label} {...item}></NCheckbox>
            })}
          </NSpace>
        </NCheckboxGroup>
      )
    }
  },
  'date-picker': {
    outputStr: '选择',
    render(formValue: Recordable, schema: FormSchema) {
      const valueFormat = schema.componentProps?.valueFormat || 'yyyy-MM-dd'
      return (
        <NDatePicker
          v-model:formatted-value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
          valueFormat={valueFormat}
        ></NDatePicker>
      )
    }
  },

  'dynamic-input': {
    outputStr: '输入',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NDynamicInput
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NDynamicInput>
      )
    }
  },

  'dynamic-tags': {
    outputStr: '添加',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NDynamicTags
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NDynamicTags>
      )
    }
  },

  input: {
    outputStr: '输入',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NInput
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NInput>
      )
    }
  },
  'input-number': {
    outputStr: '输入',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NInputNumber
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NInputNumber>
      )
    }
  },

  mention: {
    outputStr: '输入',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NMention
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NMention>
      )
    }
  },

  'radio-single': {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NRadio
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NRadio>
      )
    }
  },

  radio: {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      if (!schema?.componentProps?.options) {
        return null
      }
      return (
        <NRadioGroup
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        >
          <NSpace>
            {schema.componentProps.options?.map((item: Recordable) => {
              return (
                <NRadio value={item.value} {...item}>
                  {item.label}
                </NRadio>
              )
            })}
          </NSpace>
        </NRadioGroup>
      )
    }
  },

  rate: {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NRate
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NRate>
      )
    }
  },

  select: {
    outputStr: '选择',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NSelect
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NSelect>
      )
    }
  },

  slider: {
    outputStr: '滑动选择',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NSlider
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NSlider>
      )
    }
  },

  switch: {
    outputStr: '开启',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NSwitch
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NSwitch>
      )
    }
  },

  'time-picker': {
    outputStr: '选择',
    render(formValue: Recordable, schema: FormSchema) {
      const valueFormat = schema.componentProps?.valueFormat || 'HH:mm:ss'
      return (
        <NTimePicker
          v-model:formatted-value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          valueFormat={valueFormat}
          style={{ ...schema?.style }}
        ></NTimePicker>
      )
    }
  },

  transfer: {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NTransfer
          v-model:value={formValue[schema.field]}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NTransfer>
      )
    }
  },
  'tree-select': {
    outputStr: '勾选',
    render(formValue: Recordable, schema: FormSchema) {
      return (
        <NTreeSelect
          v-model:value={formValue[schema.field]}
          placeholder={`请${this.outputStr}${schema.label || ''}`}
          {...schema.componentProps}
          style={{ ...schema?.style }}
        ></NTreeSelect>
      )
    }
  },
  custom: {
    outputStr: '填写',
    render(formValue: Recordable, schema: FormSchema) {
      if (!schema.render || typeof schema.render !== 'function') {
        console.error('render 必须是一个函数')
        return null
      }

      return schema.render(formValue, schema.field)
    }
  },
  slot: {
    outputStr: '填写',
    render(formValue: Recordable, schema: FormSchema, slots: any) {
      if (!schema.slot || typeof schema.slot !== 'string') {
        console.error('slot 必须是一个字符串')
        return null
      }
      return slots[schema.slot]({ formValue, field: schema.field })
    }
  },
  upload: {
    outputStr: '上传',
    render(formValue: Recordable, schema: FormSchema, slots: any) {
      const AsyncComp = defineAsyncComponent(() => import('naive-ui-upload/src/NaiveUiUpload.vue'))
      return (
        <AsyncComp
          style={{ width: '100%' }}
          {...schema.componentProps}
          value={formValue[schema.field] as string[]}
          {...{
            'onUpdate:value': (val: string[]) => {
              formValue[schema.field] = val
            }
          }}
        ></AsyncComp>
      )
    }
  }
}
