import React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";

import { useForm } from 'react-hook-form';

import {useDispatch, useSelector} from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../slices/auth';
import { Navigate } from "react-router-dom"; 

export const Registration = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const {
		register, 
		handleSubmit, 
		setError, 
		formState: {errors, isValid},
	} = useForm({
		defaultValues: {
			firstName: '',
			email: '',
			password: '',
		},
		mode: 'onChange'
	});

	const onSubmit = async (values) => {
		const data = await dispatch(fetchRegister(values));
		
		if(!data.payload){
			return alert("Не удалось зарегистрироваться.");
		}
		
		if('token' in data.payload){
			window.localStorage.setItem('token', data.payload.token);
		} 
	};



	if(isAuth){
		return <Navigate to="/"/>
	}
  return (
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="img/img-02.png" alt="IMG"/>
				</div>
					<div class="login100-form validate-form">
					
					<Typography classes={{ root: styles.title }} variant="h5">
					Регистрация
					</Typography>
					
					<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						className={styles.field}
						label="Полное имя"
						helperText = {errors.firstName?.message}
						{...register('firstName', {required: 'Укажите полное имя'})}
						error = {Boolean(errors.firstName?.message)}
						fullWidth
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
						/>
						<TextField
						className={styles.field}
						label="E-Mail"
						fullWidth
						type="email"
						helperText = {errors.email?.message}
						{...register('email', {required: 'Укажите почту'})}
						error = {Boolean(errors.email?.message)}
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
						/>
						<TextField
						className={styles.field}
						label="Пароль"
						fullWidth
						helperText = {errors.password?.message}
						{...register('password', {required: 'Укажите пароль'})}
						error = {Boolean(errors.password?.message)}
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
					

					<div class="text-center p-t-136">
						<a class="txt2" href="/login">
							Войти в аккаунт
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};
