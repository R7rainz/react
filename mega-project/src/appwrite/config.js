import conf from '../config/conf.js'
import { Client, ID, Storage, Query, Databases, unique } from "appwrite"

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) { //here slug is the document ID
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, //document id
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: createPost Error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, //document id 
        {
          title,
          content,
          featuredImage,
          status,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: updatePost Error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: updatePost Error", error)
      return false;
    }
  }

  async getPost(slug){
    try{
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId, 
            slug
        )
    }catch(error){
      console.log("Appwrite service :: getPost Error", error)
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try{
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
        )
    }catch(error){
      console.log("Appwrite service :: getPosts Error", error)
      return false;
    }
  }


  //file upload services 
  async uploadFile(file){
    try{
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID,unique(),
            file
        )
    }catch(error){
      console.log("Appwrite service :: uploadFile Error", error)
      return false;
    }

  }

  async deleteFile(fileId){
    try{
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    }catch(error){
      console.log("Appwrite service :: deleteFile Error", error)
      return false;
    }
  }

  getFilePreview(fileId){  //without async function because in the docs there was no promise declared for this :w
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }
}


const service = new Service()
export default service
