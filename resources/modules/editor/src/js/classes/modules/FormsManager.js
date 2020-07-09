import AltrpForm from "../AltrpForm";
/**
 * Класс менеджер форм для фронтенда/редактора
 */
class FormsManager {
  constructor(){
    /**
     *
     * @type {AltrpForm[]}
     */
    this.forms = [];
    /**
     *
     * @type {string[]}
     */
    this.formIds = [];
    this.fieldsStorage = {};
  }

  /**
   * Регистрирует новую форму.
   * @param {string} formId
   * @param {string} modelName
   * @param {string} method
   * @return {AltrpForm}
   */
  registerForm(formId, modelName, method){
    let form = this.getForm(formId);
    let route = `/ajax/models/${modelName}`;
    if(! form){
      form = new AltrpForm(formId, route, method);
      /**
       * Если в хранилище есть поля для указанной формы,
       * то передаем их в форму, а ссылку удаляем
       */
      if(this.fieldsStorage[formId] && this.fieldsStorage[formId].length){
        form.setFields(this.fieldsStorage[formId]);
        delete this.fieldsStorage[formId]
      }
      this.forms.push(form);
    }
    return form;
  }

  /**
   * Добавляет поле к форме
   * сохраняет поле в fieldsStorage если форма еще не добавлена
   * @param {string} formId
   * @param {FrontElement} field
   * @return {boolean}
   */
  addField(formId, field){
    let form = this.getForm(formId);
    if(! form){
      this.fieldsStorage[formId] = this.fieldsStorage[formId] || [];
      this.fieldsStorage[formId].push(field);
      return true;
    }
    return form.addField(field)
  }
  /**
   * Отправляет форму
   * @param {string} formId
   * @param {int | null} modelID
   * @return {boolean}
   */
  submitForm(formId, modelID){
    if(! this.getForm(formId)){
      console.error('Форма не найдена');
      return false;
    }
    return this.getForm(formId).submit(modelID);
  }
  /**
   * Получить форму по id
   * @param {string} formId
   * @return {AltrpForm | null}
   */
  getForm(formId){
    let _form = null;
    this.forms.forEach(form=>{
      /**
       * @member {AltrpForm}form
       */
      if(form.formId === formId){
        _form = form;
      }
    });
    return _form;
  }
}
const formsManager = new FormsManager();

export default formsManager;