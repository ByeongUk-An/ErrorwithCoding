import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { Select } from "antd";
import useInput from "../hooks/useInput";

const { Option } = Select;
function Signup({ history }) {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  //const [userid, onChangeUserid] = useInput('');
  const [userid, setUserid] = useState("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [sex, onChangeSex] = useState("M");
  const { signUpLoading, signUpDone, signUpError } = useSelector(
    (state) => state.userReducer
  );

  // const onChangeUserid=(e)=>{
  //   setUserid(e.target.value)
  // }
  useEffect(() => {
    if (signUpDone) {
      alert("가입되었습니다.");
      history.push("/");
    }
  }, [signUpDone]);
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
      return;
    }
  }, [signUpError]);

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    console.log(userid);

    const role = ["user"];
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    // return dispatch({
    //   type: SIGN_UP_REQUEST,
    //   data: {
    //     userid,
    //     password,
    //     nickname,
    //     email,
    //     sex,
    //     role
    //   },
    // });
  }, [password, passwordCheck, sex]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  return (
    <>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-userid">아이디</label>
          <br />
          <Input
            name="user-userid"
            value={userid}
            required
            onChange={(e) => setUserid(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <Select defaultValue="M" style={{ width: 90 }} onChange={onChangeSex}>
            <Option value="M">남자</Option>
            <Option value="F">여자</Option>
          </Select>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>

        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Signup;
