import {
  alpha_spaces,
  confirmed,
  email,
  not_one_of as excluded,
  max,
  min,
  required
} from '@vee-validate/rules'
import {
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
  configure,
  defineRule
} from 'vee-validate'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('alpha_spaces', alpha_spaces)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('passwords_match', confirmed)
    defineRule('excluded', excluded)
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          alpha_spaces: `The field ${ctx.field} can contain only alphabetic letters and spaces`,
          min: `The field ${ctx.field} is to short`,
          max: `The field ${ctx.field} is to long`,
          email: `The field ${ctx.field} must be a valid email`,
          excluded: `You're not allowed to use this value for field ${ctx.field}`,
          passwords_match: "The passwords don't match"
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`
        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true
    })
  }
}
