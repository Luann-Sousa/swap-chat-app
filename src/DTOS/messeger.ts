/* eslint-disable camelcase */
export interface IMessegerProps {
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
      user: {
        id: string;
        name: string;
        username: string;
        sex: string;
        email: string;
        password: string;
        photo: string;
        about_me: string;
        phone: number;
        profession: string;
        birth_date: string;
        updated_at: string;
        created_at: string;
      };
    },
  ];
}
