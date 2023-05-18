import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  users: any;
	url = 'https://api.github.com/users';
	isLoading = false;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.http.get(this.url).subscribe(
			res => {
				this.isLoading = true;
				this.users = res;
			},
			error => {
				console.log(error);
			},
			() => {
				this.isLoading = false;
				console.log('completed');
			}
		);
	}

	goToGithub(url: string): void {
		window.open(url, '_blank');
	}
}
