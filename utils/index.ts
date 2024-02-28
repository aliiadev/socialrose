export class Utils {

    public static generateUrlImage(imageName: string) {
        return `assets/images/${imageName}`;
    }

    public static generateRemoteUrlImage(imageName: string) {
        return `https://raw.githubusercontent.com/darkme0w/socialrose-upload/main/${imageName}`;
    }

}