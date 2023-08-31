function formatDate(value) {
    return value.toISOString().slice(0, 10)
}


const formatNum = (num) => {
    return num.toLocaleString("id-ID")
  }



module.exports = {formatDate , formatNum}