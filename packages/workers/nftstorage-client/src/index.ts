// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { Blob, File, NFTStorage } from 'nft.storage';

// The 'mime' npm package helps us set the correct file type on our File objects

// Your NFT.Storage API key:
type EnvType = {
  NFT_STORAGE_KEY: string;
};

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
};

const handleRequest = async (request: Request, env?: EnvType) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Only POST requests are supported'
      }),
      {
        headers
      }
    );
  }

  const payload = await request.json();

  if (!payload) {
    return new Response(
      JSON.stringify({ success: false, message: 'No body provided' }),
      { headers }
    );
  }

  const client = new NFTStorage({ token: env.NFT_STORAGE_KEY });
  //console.log("NFTStorage", client)

  //try {
  //const data = fromString(payload?.data, 'base64')
  //console.log("NFTStorage data ==> ", payload?.data)
  try {
    const blob = dataURItoBlob(payload?.data.content);
    const content = new File([blob], payload?.data.name, {
      type: payload?.data.type
    });

    const cid = await client.storeBlob(content);

    if (cid) {
      return new Response(JSON.stringify({ success: true, data: cid }), {
        headers
      });
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Something went wrong!',
          cid
        }),
        {
          headers
        }
      );
    }
  } catch (error) {
    console.log('error ->', error);
  }

  //} catch {
  //  return new Response(JSON.stringify({ success: false, message: 'Something went wrong!' }), { headers });
  // }
};

export default {
  async fetch(request: Request, env?: EnvType) {
    return await handleRequest(request, env);
  }
};
