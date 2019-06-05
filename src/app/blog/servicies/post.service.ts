import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import * as faker from 'Faker';

@Injectable()

export class PostService {

    constructor(
        private http: HttpClient
    ) {}

    fecthPosts() {
        return this.http.get(
            environment.paths.base + environment.paths.posts.fetch
        );
    }

}
