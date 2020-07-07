export default function dateRange(start, end) {

	//if start and end date are the same:
	if (start === end) return start

	const startArray = start.split(" ")
	const endArray = end.split(" ")

	//if year and month are the same:
	if (startArray[2] === endArray[2] && startArray[1] === endArray[1]) return startArray[0] + " — " + endArray[0] + " " + startArray[1] + " " + startArray[2]

	//if year is the same:
	if (startArray[2] === endArray[2]) return startArray[0] + " " + startArray[1]  + " — " + endArray[0] + " " + endArray[1] + " " + startArray[2]

	//return full date range
	return start + " — " + end
}