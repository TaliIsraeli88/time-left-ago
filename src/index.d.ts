declare module "time-left-ago" {
  export function timeAgo(time: string): string;
  export function timeAgoFormatted(time: string): string;
  export function timeLeft(time: string, ttl: number | string): string;
}
