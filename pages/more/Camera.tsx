import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraExample extends React.Component {
  camera = null

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    imgUri: '',
    showCamera: true
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <>
          {
            this.state.showCamera
             ? <View style={{ flex: 1 }}>
              <Camera 
                style={{ flex: 1 }} 
                type={this.state.type}
                ref={ref => {
                  this.camera = ref;
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type:
                          this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={async () => {
                      if (this.camera) {
                        let photo = await this.camera.takePictureAsync()
                        this.setState({
                          imgUri: photo.uri,
                          showCamera: false
                        })
                      }
                    }}
                  >
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', marginLeft: 20 }}> 拍照 </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
            : <View style={{flex: 1}}>
                <Image source={{uri: this.state.imgUri}} style={{flex: 1}}></Image>
            </View>
          }
        </>
      );
    }
  }
}