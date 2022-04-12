import {useEffect, useState, useContext} from "react";
import cn from "classnames";

import AppContext from "@context/AppContext";
import {UserType} from "@customTypes/types";
import {getUsers} from "@services/apiServices";

import Container from "@components/Ui/Container/Container";
import Button from "@components/Ui/Button/Button";
import User from "@components/Users/User/User";

import style from "@components/Users/Users.module.scss"

const Users = () => {
  const context = useContext(AppContext);

  const [users, setUsers] = useState<UserType[] | null>(null);
  const [getMore, setGetMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getUsersData = async () => {
    const usersResponse = await getUsers("page=1&count=6");
    setPage(usersResponse.page);
    setUsers(usersResponse.users);
    setGetMore(usersResponse.total_pages > 1);
  }

  const getMoreUsersData = async () => {
    if (users) {
      const usersResponse = await getUsers(`page=${page + 1}&count=6`);
      setUsers([...users, ...usersResponse.users]);
      setPage(usersResponse.page);
      if (usersResponse.page === usersResponse.total_pages) {
        setGetMore(false);
      }
    }
  }

  useEffect(() => {
    if (context && context.app.usersBlock.reloadUsersBlock) {
      getUsersData();
      context.app.usersBlock.setReloadUsersBlock(false);
    }
  }, [!!context && context.app.usersBlock.reloadUsersBlock]);

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Container className={cn(style.users, "usersBlock")}>
      <h2 className={style.users__title}>
        Working with GET request
      </h2>

      <div className={style.users__list}>
        {!!users?.length && users.map(el => <User key={el.id} {...el}/>)}
      </div>

      <Button disabled={!getMore} onClick={getMoreUsersData} children="Show more"/>
    </Container>
  );
};

export default Users;
