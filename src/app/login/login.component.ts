import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	errorMessage = '';

	@ViewChild('loginForm', { static: true }) form: any;

	constructor(private authService: AuthService, private router: Router) {}

	login(data: any) {
		console.log(data);

		let res = this.authService.login(data?.value?.username, data?.value?.password);
		if (res === 200) {
			this.form.reset();
			this.router.navigate(['home']);
		} else if (res === 403) {
			this.errorMessage = 'Invalid credentials. Try again!';
		}
	}

	hideErrorMessage() {
		this.errorMessage = "";
	}
}
