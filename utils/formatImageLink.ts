export default function formatImageLink(imageLink: string) {
  return imageLink.replace(/\//g, "%2");
}
