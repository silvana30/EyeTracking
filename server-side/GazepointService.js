const startRecord = (client) => {
    console.log("START RECORD")
    client.write('<SET ID="ENABLE_SEND_CURSOR" STATE="1" />\r\n')
    client.write('<SET ID="ENABLE_SEND_POG_FIX" STATE="1" />\r\n')
    client.write('<SET ID="ENABLE_SEND_DATA" STATE="1" />\r\n')
    client.write('<SET ID="ENABLE_SEND_COUNTER" STATE="1" />\r\n')
}

const stopRecord = (client) => {
    // client.write('<SET ID="ENABLE_SEND_CURSOR" STATE="1" />\r\n')
    // client.write('<SET ID="ENABLE_SEND_POG_FIX" STATE="1" />\r\n')
    client.write('<SET ID="ENABLE_SEND_DATA" STATE="0" />\r\n')
    // client.write('<SET ID="ENABLE_SEND_COUNTER" STATE="1" />\r\n')
}

exports.startRecord = startRecord
exports.stopRecord = stopRecord