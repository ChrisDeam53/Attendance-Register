<html> 
    <td>{{firstName, secondName}}</td>
    <td>{{attendanceStatus}}</td>
</html>

<style>
</style>

<script>

export default {
    name: 'TableRow',
    props: {
        firstName: {
            type: String
        },
        secondName: {
            type: String
        },
        attendanceStatus: {
            type: Boolean
        }
    }
}
</script>