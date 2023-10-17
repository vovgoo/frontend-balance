import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";
import { useForm } from 'react-hook-form';

import {useDispatch, useSelector} from 'react-redux';
import { fetchUserData, selectIsAuth } from '../../slices/auth';
import { Navigate } from "react-router-dom"; 

export const Login = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const {
		register, 
		handleSubmit, 
		setError, 
		formState: {errors, isValid},
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange'
	});

	const onSubmit = async (values) => {
		const data = await dispatch(fetchUserData(values));
		
		if(!data.payload){
			return alert("Не удалось авторизоваться.");
		}
		
		if('token' in data.payload){
			window.localStorage.setItem('token', data.payload.token);
		} 
	};



	if(isAuth){
		return <Navigate to="/"/>
	}

  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="img/img-01.png" alt="IMG"/>
				</div>

				<div className="login100-form validate-form">
					
					<Typography classes={{ root: styles.title }} variant="h5">
					Авторизация
					</Typography>
					
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
						className={styles.field}
						label="E-Mail"
						fullWidth
						error = {Boolean(errors.email?.message)}
						type="email"
						InputProps={{
							style: {
								color: 'white', // Белый цвет текста в полеи
							},
						}}
						InputLabelProps={{
							style: {
								color: 'white', // Белый цвет текста метки
							},
						}}
						helperText = {errors.email?.message}
						{...register('email', {required: 'Укажите почту'})}
						/>
						<TextField
						className={styles.field}
						label="Пароль"
						error = {Boolean(errors.password?.message)}
						fullWidth
						InputProps={{
							style: {
								color: 'white', // Белый цвет текста в поле
							},
						}}
						InputLabelProps={{
							style: {
								color: 'white', // Белый цвет текста метки
							},
						}}
						helperText = {errors.password?.message}
						{...register('password', {required: 'Укажите пароль'})}
						/>
						<Button
						size="large"
						type="submit"
						variant="contained"
						fullWidth
						style={{
							display: 'inline-block',
							fontSize: '14px',
							padding: '10px 28px 10px',
							color: '#000000',
							textTransform: 'uppercase',
							fontWeight: 700,
							background: '#ffffff',
							letterSpacing: '2px',
							margin: '10px 0px 10px 0px',
						}}					
						>
						Войти
						</Button>
					</form>

					<div className="text-center p-t-136">
						<a className="txt2" href="/register" style={{color: 'white'}}>
							Создай свой аккаунт 
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};
