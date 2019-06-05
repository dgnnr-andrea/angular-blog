import {PostModel} from '../models/post.model';
import * as faker from 'Faker';

export class PostsFakerService {

    private numPostList = 10;

    fetchPosts(): Array<PostModel> {
        const postList = [];
        let i = 0;
        do {
            postList.push(this.createPost(i));
            i++;
        } while (i <= this.numPostList);
        return postList;
    }

    private createPost(index): PostModel {
        const post: PostModel = new PostModel();
        post.id = 'post_' + index;
        post.image = faker.Image.imageUrl();
        post.comments = faker.random.number(7);
        post.user = faker.Name.firstName() + ' ' + faker.Name.lastName();
        post.title = faker.Lorem.sentence(10);
        post.creationDate = faker.Date.recent(10);
        return post;
    }
}
