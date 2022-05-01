import { Template } from '../../../../interfaces';
import { CustomValidator } from 'express-validator';
import { TemplateModel } from '../../../../models';

export const templateIsRegisteredInDatabase: CustomValidator = async (
  id,
  { req }
): Promise<boolean> => {
  const template: Template | null = await TemplateModel.findById<Template>(id, {
    isDeleted: false,
  });
  if (!template) {
    throw new Error('Something was wrong');
  }
  req.template = template;
  return true;
};
