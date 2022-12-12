/* eslint-disable camelcase */
export interface IMessegerParaProps {
  error: boolean;
  messegens: [
    {
      id: string;
      user_id: string;
      user_me: string;
      user_para: string;
      messeger: string;
      file: string;
      like: string;
      updated_at: string;
      created_at: string;
    },
  ];
}
