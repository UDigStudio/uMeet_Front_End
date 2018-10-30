import { Camera, FileSystem, ImageManipulator, Permissions } from 'expo';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

const wbIcons = {
  auto: 'wb-auto',
  sunny: 'wb-sunny',
  cloudy: 'wb-cloudy',
  shadow: 'beach-access',
  fluorescent: 'wb-iridescent',
  incandescent: 'wb-incandescent',
};

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

export default class TakePicture extends React.Component {
  state = {
    zoom: 0,
    autoFocus: 'on',
    type: 'front',
    photos: [],
    whiteBalance: 'auto',
    ratio: '16:9',
    newPhotos: false,
    permissionsGranted: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(PHOTOS_DIR).catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  toggleFacing = () => this.setState({ type: this.state.type === 'back' ? 'front' : 'back' });

  toggleWB = () => this.setState({ whiteBalance: wbOrder[this.state.whiteBalance] });

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  handleMountError = ({ message }) => console.error(message);

  onPictureSaved = async photo => {
    const name = `${PHOTOS_DIR}/${Date.now()}.jpg`;

    const manipulatedPhoto = await this.manipulatePhoto(photo);

    await FileSystem.moveAsync({
      from: manipulatedPhoto.uri,
      to: name,
    });
    this.setState({ newPhotos: true, location: name });
  };

  async manipulatePhoto(photo) {
    const width = photo.width;
    const height = photo.height;
    return ImageManipulator.manipulate(
      photo.uri,
      [{ flip: { horizontal: true }}, { crop: {
          originX: 0,
          originY: (height - width) / 2,
          width: width,
          height: width
        }}],
      { format: 'jpg' }
    );
  }

  renderNoPermissions = () =>
    <View style={styles.noPermissions}>
      <Text style={{ color: 'white' }}>
        Camera permissions not granted - cannot open camera preview.
      </Text>
    </View>;

  renderBottomBar = () =>
    <View
      style={styles.bottomBar}>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
        <Ionicons name="ios-reverse-camera" size={32} color="white" />
      </TouchableOpacity>
      <View style={{ flex: 0.4 }}>
        <TouchableOpacity
          onPress={this.takePicture}
          style={{ alignSelf: 'center' }}
        >
          <Ionicons name="ios-radio-button-on" size={70} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleWB}>
        <MaterialIcons name={wbIcons[this.state.whiteBalance]} size={32} color="white" />
      </TouchableOpacity>
    </View>;

  renderCamera = () =>
    (
      <View style={{ flex: 1 }}>
        <Camera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          type={this.state.type}
          autoFocus={this.state.autoFocus}
          zoom={this.state.zoom}
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          onMountError={this.handleMountError}
        >
          {this.renderBottomBar()}
        </Camera>
      </View>
    );

  renderPicture() {
    return <View style={{ flex: 1, paddingTop: 20, flexDirection: 'column', justifyContent: 'flex-start' }}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button} onPress={this.goBack}>
          <MaterialIcons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
      >
        <Image
          style={styles.picture}
          source={{ uri: this.state.location }}
        />
      </TouchableOpacity>
    </View>
  }

  goBack = () => {
    this.setState({ newPhotos: false });
  };

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    const content = this.state.newPhotos ? this.renderPicture() : cameraScreenContent;
    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomBar: {
    paddingBottom: 5,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  },
  noPermissions: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    padding: 10,
  },
  toggleButton: {
    flex: 0.4,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    flex: 0.3,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
});