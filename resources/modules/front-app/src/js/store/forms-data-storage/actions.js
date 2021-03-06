export const CHANGE_FORM_FIELD_VALUE = 'CHANGE_FORM_FIELD_VALUE';

/**
 * Получает данные поля формы и сохраняет в хранилище
 * @param {string}fieldName
 * @param {*}value
 * @param {string}formId
 * @return {{type: string, fieldName: *, value: *, formId: *}}
 */
export function changeFormFieldValue(fieldName, value, formId) {
  return {
    type: CHANGE_FORM_FIELD_VALUE,
    fieldName,
    value,
    formId,
  };
}

