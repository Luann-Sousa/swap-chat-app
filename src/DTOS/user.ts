/* eslint-disable camelcase */
export interface IUserProps {
  error: boolean;
  users: [
    {
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
    },
  ];
}
