export default function Subdomain(subdomain: string, dest: string) {
  if (dest.startsWith('/')) dest = dest.slice(1);
  return `https://${subdomain}.team1492.org/${dest}`;
}
