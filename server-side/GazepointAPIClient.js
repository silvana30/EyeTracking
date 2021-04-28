//######################################################################################
//# GazepointAPI.js - Example Client
//# Written in 2021 by Gazepoint www.gazept.com
//#
//# To the extent possible under law, the author(s) have dedicated all copyright 
//# and related and neighboring rights to this software to the public domain worldwide. 
//# This software is distributed without any warranty.
//#
//# You should have received a copy of the CC0 Public Domain Dedication along with this 
//# software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
//######################################################################################

var net = require('net')
const { startRecord } = require("./GazepointService")
var parseString = require('xml2js').parseString

var client = new net.Socket()
client.setEncoding('utf8')
console.log(client)
client.connect({
    host: '127.0.0.1', // Host machine IP
    port: 4242 // Gazepoint Port
})

client.on('connect', function () {
    console.log('Connected with Gazepoint API server')

    // Send message to Gazepoint API server to enable data
    client.write('<GET ID="CALIBRATE_START" />\r\n')
    client.write('<SET ID="CALIBRATE_START" STATE="1" />\r\n')

    client.write('<GET ID="CALIBRATE_SHOW" />\r\n')
    client.write('<SET ID="CALIBRATE_SHOW" STATE="1" />\r\n')

    client.write('<GET ID="CALIBRATE_TIMEOUT" />\r\n')
    client.write('<GET ID="CALIBRATE_DELAY" />\r\n')
    client.write('<GET ID="CALIBRATE_RESULT_SUMMARY" />\r\n')

    // client.write('<GET ID="TRACKER_DISPLAY" />\r\n')
})

client.on('data', function (data) {
    // Print Gazepoint data stream to console
    console.log('data', data)
    parseString(data, (err, result) => {
        console.log(result)
        if (result?.CAL
            && result.CAL['$']
            && result.CAL['$'].ID === 'CALIB_RESULT_PT'
            && result.CAL['$'].PT === '5'
        ) {
            setTimeout(() => {
                client.write('<SET ID="CALIBRATE_SHOW" STATE="0" />\r\n') //stop calibration
                startRecord(client)
            }, 3000)
        }
    })
})


