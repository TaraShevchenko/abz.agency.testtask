export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export type UsersResponseType = {
  count: number;
  links: {
    next_url: string;
    prev_url: string | null;
  }
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
  users: UserType[];
}
