export const BasicButtonType = {
  Create: 'Create',
  Registration: 'Registration',
  Update: 'Update',
  Edit: 'Edit',
  Delete: 'Delete',
  Send: 'Send',
  Cancel: 'Cancel',
} as const;
export type BasicButtonType =
  (typeof BasicButtonType)[keyof typeof BasicButtonType];

export const basicButtonTypeDisplay = {
  [BasicButtonType.Create]: '作成',
  [BasicButtonType.Registration]: '登録',
  [BasicButtonType.Update]: '更新',
  [BasicButtonType.Edit]: '編集',
  [BasicButtonType.Delete]: '削除',
  [BasicButtonType.Send]: '送信',
  [BasicButtonType.Cancel]: 'キャンセル',
};

export const parseBasicButtonType = (value: string): BasicButtonType => {
  switch (value) {
    case BasicButtonType.Create:
      return BasicButtonType.Create;
    case BasicButtonType.Registration:
      return BasicButtonType.Registration;
    case BasicButtonType.Update:
      return BasicButtonType.Update;
    case BasicButtonType.Edit:
      return BasicButtonType.Edit;
    case BasicButtonType.Delete:
      return BasicButtonType.Delete;
    case BasicButtonType.Send:
      return BasicButtonType.Send;
    case BasicButtonType.Cancel:
      return BasicButtonType.Cancel;
    default:
      throw new Error(`Unexpected value(BasicButtonType): ${value}`);
  }
};
