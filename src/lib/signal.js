import libsignal from 'https://cdn.jsdelivr.net/npm/libsignal-protocol@1.3.15/+esm'
var store = new MySignalProtocolStore()
var address = new libsignal.SignalProtocolAddress(recipientId, deviceId)
const signalRegister = () => {
    var KeyHelper = libsignal.KeyHelper
    var registrationId = KeyHelper.generateRegistrationId()
    KeyHelper.generateIdentityKeyPair().then(function(identityKeyPair) {})
    KeyHelper.generatePreKey(keyId).then(function(preKey) {
        store.storePreKey(preKey.keyId, preKey.keyPair)
    })
    KeyHelper.generateSignedPreKey(identityKeyPair, keyId).then(function(signedPreKey) {
        store.storeSignedPreKey(signedPreKey.keyId, signedPreKey.keyPair)
    })
}