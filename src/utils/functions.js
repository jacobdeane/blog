export default function sformat(seconds) {
	seconds = Number(seconds);
	const d = Math.floor(seconds / (3600*24));
	const h = Math.floor(seconds % (3600*24) / 3600);
	const m = Math.floor(seconds % 3600 / 60);
	const s = Math.floor(seconds % 60);

	const dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
	const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
	const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
	const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

	const formattedTime = dDisplay + hDisplay + mDisplay + sDisplay;
	
	//remove trailing comma if there is one.
	return formattedTime.replace(/,\s*$/, "");
}

export function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}