# DFFLSV Commands

dfflsv is the licenser server, which is used to manage the license for DFF. The syntax is:

    `dfflsv.exe argument`

The arguments are as follows. The square brackets indicate required parameters, the angle brackets indicate optional parameters.*

**On both client and server**

`help` - to show the options as explained below

`request [filename]` - to make and save a license request file.

`install [filename]` - to install the license file.

`getmac [filename]` - to get and save the MAC address in a file.

`test <host <port>>` - to test the connection to the server.

`status <host <port>>` - to list the license information.

`reset <host <port>>` - to clear the list of computers registered.

**On Server Only**

`start <port>` - to start a server with optional port (the default port number is 3583).

`stop <port>` - to stop the server, the port must be the same as start. 
 